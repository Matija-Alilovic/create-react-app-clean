import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface BrandrAxiosResponse<T = any, D = any> extends AxiosResponse<T, D> {
    config: BrandrAxiosRequestConfig<D>;
}

export interface BrandrAxiosError<T = any, D = any> extends AxiosError<T, D> {
    config: BrandrAxiosRequestConfig<D>;
    response: BrandrAxiosResponse<T, D>;
}

export interface BrandrAxiosRequestConfig<D = any> extends AxiosRequestConfig<D> {
    successMessage?: string;
    errorMessage?: string;
}
