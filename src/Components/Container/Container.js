import React, { useContext, useState } from "react";
import style from "./ContainerStyle";
import Sidebar from "../Sidebar/Sidebar";
import { ChatContext } from "../../Context/ChatContext";
import Notification from "../Notification/Notification";
import Loading from "../Loading/Loading";

const Container = ({ children }) => {
    const [sidebarState, setSidebarState] = useState(false);
    const { notification } = useContext(ChatContext)

    return (
        <>
            <div style={style.container}>
                <Sidebar
                    state={sidebarState}
                    onClose={() => setSidebarState(false)}
                />
                {!sidebarState && (
                    <button
                        onClick={() => setSidebarState(true)}
                        style={style.openButton}
                    >
                        ☰
                    </button>
                )}
                {children}
            </div>

            <Notification />
            <Loading />

        </>
    )
}

export default Container;