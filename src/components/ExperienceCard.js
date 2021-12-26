import React from 'react';

export default (props) => {
    return (
        <div className={`card ${props.className}`}>
            <div className="company-logo-container">
                <img className="company-logo" src={props.imgLink}></img>
            </div>
            <div className="info">
                <h2 className="title">
                    {props.title}
                </h2>
                <div className="role-date">
                    <h3 className="role">
                        {props.role}
                    </h3>
                    <h3 className="date">
                        {props.date}
                    </h3>
                </div>
                {props.children}
            </div>

            <style jsx>{`
                .card {
                    display: grid;
                    grid-template-columns: 256px auto;
                    margin-top: 48px;
                    margin-bottom: 48px;
                    margin-left: ${props.margin};
                    margin-right: ${props.margin};
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
                    background-color: white;
                    border-radius: 1rem;
                }
                .xp-header{
                    display: flex;
                    justify-content: center;
                    font-family:'poppins';
                    font-weight: 400;
                    color: black;
                }
                .company-logo-container {
                    margin: auto;
                }
                .company-logo {
                    object-fit: cover;
                    width: 200px;
                    height: 200px;
                    
                    margin: 28px;
                }
                .info {
                    margin: 28px;
                }
                .role-date {
                    display: flex;
                    flex-direction: horizontal;
                    font-family: 'poppins';
                }
                .title {
                    font-family: 'poppins';
                    font-weight: 500;
                    font-size: 24px;
                    margin: 0;
                }
                .role {
                    margin: 0;
                    margin-right: 8px;
                    font-weight: 500;
                    font-size: 18px;
                }
                .date {
                    margin: 0;
                    font-weight: 500;
                    font-size: 18px;
                }
                .body-text{
                    font-family:'poppins';
                    font-weight: 500;
                    font-size: 1rem !important;
                    margin-top: 1rem;
                    letter-spacing: normal !important;
                    text-transform: none !important;
                }
                @media only screen and (max-width: 650px) {
                    .card {
                        grid-template-columns: none;
                        grid-template-rows: 148px auto;
                        margin-top: 24px;
                        margin-bottom: 24px;
                    }
                    .company-logo {
                        width: 120px;
                        height: 120px;
                    }
                }
            `}
            </style>
        </div>
    );
}