import React from "react";

export interface userInfoType {
    email?: string | '';
    password?: string | '';
}

export interface FormProps {
    onSubmit: React.FormEventHandler;
}