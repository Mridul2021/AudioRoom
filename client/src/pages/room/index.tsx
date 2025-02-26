import {
    OwnCapability,
    useCallStateHooks,
    useRequestPermission,
  } from "@stream-io/video-react-sdk";
  import { Participants } from "./particiants";
  import { Controls } from "./controls";
  import { useUser } from "../../user-context";
  import { PermissionRequestsPanel } from "./permission-request";
  
  export const Room = () => {
    const {
      useCallCustomData,
      useParticipants,
      useCallCreatedBy,
    } = useCallStateHooks();
    const { user } = useUser();
    const custom = useCallCustomData();
    const participants = useParticipants();
    const createdBy = useCallCreatedBy();
    const { hasPermission, requestPermission } = useRequestPermission(
      OwnCapability.SEND_AUDIO
    );
  
    return (
      <div className="room">
        <h2 className="title">{custom?.title ?? "<Title>"}</h2>
        <h3 className="description">{custom?.description ?? "<Description>"}</h3>
        <p className="participant-count">{participants.length} participants</p>
  
        <Participants />
        {user?.username === createdBy?.id ? (
          <>
            <PermissionRequestsPanel />
          </>
        ) : (
          <button className="request-permission-btn" onClick={requestPermission}>
            {" "}
            &#9995;
          </button>
        )}
        {hasPermission && <Controls />}
      </div>
    );
  };