import React from "react";
import { ActionsTypes } from "./reducer.types";

export interface StateInterface {
    user: {};
    categories: [];
}

export interface ContextValue {
    state: StateInterface;
    dispatch: (action: ActionsTypes) => void;
}