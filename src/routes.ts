import {BookingController} from './controller/BookingController';
import {RoomController} from './controller/RoomController';

const BookingRoutes = [
    {
        route: '/bookings',
        method: 'get',
        controller: BookingController,
        action: 'all'
    },
    {
        route: '/bookings',
        method: 'post',
        controller: BookingController,
        action: 'save'
    },
    {
        route: '/bookings/:id',
        method: 'delete',
        controller: BookingController,
        action: 'remove'
    },
];
const RoomRoutes = [
    {
        route: '/rooms',
        method: 'get',
        controller: RoomController,
        action: 'all'
    },
    {
        route: '/roomsExcept',
        method: 'get',
        controller: RoomController,
        action: 'allExcept'
    },
];

export const Routes = [
    ...BookingRoutes,
    ...RoomRoutes
];
