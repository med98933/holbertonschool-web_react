import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";


export const Notifications = function() {
    return <div className="Notifications">
                <p>Here is the list of notifications</p>
        <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>

         <button
        style={{
            display: 'inline-block',
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 0,
            border: 0,
            outline: 'none',
            cursor: 'pointer',
        }}
        aria-label="close"
      >

      </button>

    </div>
}