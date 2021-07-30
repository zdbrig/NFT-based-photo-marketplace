import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import { Modal } from "reactstrap";
import "./AuthorComponent.css";
function Authorcomponent(props: any) {
    const [user, setUser] = useState<any>();
    const [publickey, setpublicKey] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [ipfsPhoto, setipfsphoto] = useState<any>();
    const toggle = () => setLoading(false);
    useEffect(() => {
        setpublicKey(props.account);
    });

    function goEditProfil() {
        window.location.assign("#/EditProfil");
    }
    useEffect(() => {
        getUserByPublicKey(props.account);
    }, [publickey]);
    function getUserByPublicKey(publicKey: any) {
        if (publickey !== undefined) {
            fetch("/api/getUserByPublickey?publicKey=" + publicKey, {
                method: "GET",
                mode: "no-cors",
                credentials: "same-origin",
                headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer abc123def.abc123def.abc123def",
                },
            })
                .then(function (response) {
                    if (response.status !== 200) {
                        console.log(
                            "Looks like there was a problem. Status Code: " +
                                response.status
                        );
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        console.log("data1" + data.user);

                        if (data.user !== "undefined") {
                           


                            setUser(data);
                            setLoading(false);
                            
                        } else {
                            window.location.assign("#/Signup");
                        }
                        props.onSelectUser(data);
                        console.log("data" + data.email);
                    });
                })
                .catch(function (err) {
                    console.log("Fetch Error :-S", err);
                });
        }
    }

    function logout() {
        localStorage.clear();
        window.location.href = "/";
    }

    function renderUser() {
        if (user !== undefined) {
            // console.log(Object.prototype.toString.call(user.photo));

            console.log(ipfsPhoto);
            const urlipfs = "https://ipfs.io/ipfs/" + ipfsPhoto;
            console.log(urlipfs);
            return (
                <div className="author__meta">
                    <a
                        href="#/Author"
                        className="author__avatar author__avatar--verified"
                    >
                        {user.photo === "" ? (
                            <img src="img/avatars/avatar5.jpg" alt="" />
                        ) : (
                            <img
                                src={`https://ipfs.io/ipfs/${user.photo}`}
                                alt=""
                            />
                        )}
                    </a>
                    <h1 className="author__name">
                        {user.username === undefined && user === undefined ? (
                            ""
                        ) : (
                            <a href="#/Author">{user.username}</a>
                        )}
                    </h1>
                    <h2 className="author__nickname">
                        <a href="#/Author">@{user.username}</a>
                    </h2>

                    <div className="author__code">
                        <input
                            type="text"
                            value={user.publicKey}
                            id="author-code"
                        />
                        <button type="button">
                            <span>Copied</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18,19H6a3,3,0,0,1-3-3V8A1,1,0,0,0,1,8v8a5,5,0,0,0,5,5H18a1,1,0,0,0,0-2Zm5-9.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0L16.06,3H8A3,3,0,0,0,5,6v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V10S23,10,23,9.94ZM17,6.41,19.59,9H18a1,1,0,0,1-1-1ZM21,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V6A1,1,0,0,1,8,5h7V8a3,3,0,0,0,3,3h3Z" />
                            </svg>
                        </button>
                    </div>

                    <div className="author__social"></div>
                    <div className="author__wrap">
                        <div className="author__followers">
                            {user.fllower !== undefined ? (
                                <>
                                    {" "}
                                    <p>3829</p>
                                    <span>Followers</span>
                                </>
                            ) : (
                                <>
                                    {" "}
                                    <p>0</p>
                                    <span>Followers</span>
                                </>
                            )}
                        </div>
                        <button className="author__follow" type="button">
                            Follow
                        </button>
                    </div>
                    <div>
                        {" "}
                        <button className="EditProfil" onClick={goEditProfil}>
                            {" "}
                            Edit Profil
                        </button>
                    </div>
                    <div>
                        {" "}
                        <button className="EditProfil" onClick={logout}>
                            {" "}
                            Singout
                        </button>
                    </div>
                </div>
            );
        }
    }
    return (
        <div className="author author--page">
            <>
                {" "}
                <Modal
                    isOpen={loading}
                    toggle={toggle}
                    className="modalLoading"
                    wrapClassName="modalLoadingWrap"
                    modalClassName="modalLoadingModal"
                    backdropClassName="modalLoadingBackdrop"
                    contentClassName="modalLoadingContent"
                >
                    <div>
                        <p className="modalPara"> Waiting</p>
                        <img src="loading.gif" alt="" />
                    </div>
                </Modal>
            </>
            {renderUser()}
        </div>
    );
}
export default Authorcomponent;
