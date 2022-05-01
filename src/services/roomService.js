import axiosClient from "./axiosClient";

const roomService = {
    addroom: (params) => {
        const url = "/room";
        return axiosClient.post(url, params);
    },
    adddocument: (params) => {
        const url = "/document";
        return axiosClient.post(url, params);
    },
    getroom: () => {
        const url = "/room";
        return axiosClient.get(url);
    },
    getroomid: (id) => {
        const url = `/room/${id}`;
        return axiosClient.get(url);
    }
};

export default roomService;