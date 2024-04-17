import type { AxiosError, AxiosInstance } from "axios";
import type { IRequestOption } from "./interfaces";
/**
 * Класс для работы с вызовом API.
 * Содержит методы для отправки запросов и обработки ошибок.
 */
export declare class APIClient {
    private baseURL;
    api: AxiosInstance;
    errorCb: Map<string, (error: AxiosError) => void>;
    constructor(baseURL: string);
    /**
     * Добавляет функцию обратного вызова для обработки ошибок
     *
     * @param {string} id - ID статуса ошибки
     * @param {(error: AxiosError) => void} cb - Функция обратного вызова.
     * @return {void} Эта функция ничего не возвращает.
     */
    addErrorCb(id: string, cb: (error: AxiosError) => void): void;
    /**
     * Генерирует уникальный идентификатор устройства
     *
     * @return {Promise<string>} Уникальный идентификатор
     */
    genearateDeviceId(): Promise<string>;
    /**
     * Отправляет запрос к серверу и возвращает ответ.
     * Метод принимает дженерик с типами Req и Resp, где Req - тип запроса и Resp - тип ответа.
     *
     * Если произошла ошибка, то вызывает функцию обратного вызова errorCb
     * относительно статуса ошибки.
     *
     * @param {IRequestOption<Req>} option - Опции запроса
     * @returns {Promise<Resp>} Ответ от сервера
     */
    request<Req, Resp>(option: IRequestOption<Req>): Promise<Resp>;
}
//# sourceMappingURL=APIClient.d.ts.map