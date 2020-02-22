import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import axios from 'axios'
// import axiosRetry from 'axios-retry';
import {Booking} from "../entity/Booking";
// import {Room} from "../entity/Room";

// axiosRetry(axios, { retryDelay: (retryCount) => {
//     return retryCount * 1000;
//   }});

export class BookingController {

    private repository = getRepository(Booking);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.repository.find({ relations: ["room"] });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        // get customer data e.g. call CustomerController's action or via auth...
        const phone = '123123123';
        const text = 'Номер успешно забронирован';
        let vip: {vip: boolean};
        let result;

        try {
            vip = await axios.get(`http://ds24.ru/test/vip.php?phone=${phone}`);
        } catch (error) {
            vip = {vip: false};
        }

        try {
            result = await this.repository.save(Object.assign(request.body, {vip: vip.vip}));
            // todo: separate instance of axios wrapped in axiosRetry
            // axios.get(encodeURI(`http://ds24.ru/test/sms.php?phone=${phone}&text=${text}`));
        } catch (error) {
            result = JSON.stringify(error);
        }

        return result;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let entityToRemove;
        let result;

        try {
            entityToRemove = await this.repository.findOne(request.params.id);

            try {
                result = await this.repository.remove(entityToRemove);
            } catch (error) {
                result = JSON.stringify(error);
            }
        } catch (error) {
            result = JSON.stringify(error);
        }

        return result;
    }

}