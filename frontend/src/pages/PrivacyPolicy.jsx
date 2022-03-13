import React, {useEffect} from "react";
import Footer from "../components/Footer";

function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <div className="container" id="outblog">
        <div className="blog-single gray-bg">
            <div className="container">
                <div className="article">
                    <h1>Privacy Policy</h1>
                    <div className="container marketing mt-4">
                        <div>
                            <h4>Last Updated 3/12/2022</h4>
                        </div>
                        <hr className="featurette-divider"></hr>
                        <div>
                            <h3 className="text-center mb-4">What Information Of Yours We Collect</h3>
                        </div>
                        <div>
                            <ul>
                                <li>E-mail Address</li>
                                <li>Twitter Username</li>
                                <li>Unique Twitter ID</li>
                                <li>Date and time of the creation of your blog account</li>
                                <li>Whether we have permission to send e-mails</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-center mb-4">Where we get this data</h3>
                        </div>
                        <p>This data is collected when you create an account or click the "Login with Twitter" button and is provided to us, with your permission, from Twitter as well as input from you once you are logged in to your account. When you log in using Twitter, you are providing your credentials to Twitter.</p>
                        <div>
                            <h3 className="text-center mb-4">What we do with this data</h3>
                        </div>
                        <div>
                            <ul>
                                <li>E-mail address: Used to send you updates. You can opt out of receiving e-mails on your profile.</li>
                                <li>Twitter Username: Used to periodically check your counnt to update the follower totals. Your username can also be displayed when we recommend users to each other.</li>
                                <li>Unique Twitter ID: Used as a unique identifier in our database.</li>
                                <li>Date and time of the creation of your petition account: Used for data analysis to study the spread of the petition.</li>
                                <li>Whether we have permission to send e-mails: Used in determing whether to send e-mails or not.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-center mb-4">Where we share your data</h3>
                        </div>
                        <p>Your posts and anonymized likes are displayed to other users of the site.</p>
                        <div>
                            <h3 className="text-center mb-4">What rights you have over your data</h3>
                        </div>
                        <p>You can also delete your posts or account entirely by contacting us at the contact information below.</p>
                        <div>
                            <h3 className="text-center mb-4">Children's Policy</h3>
                        </div>
                        <p>We do not solicit information or market to children under the age of 13. If you have become aware of any information we have collected from a child under 13 years of age, please contact us at the address below.</p>
                        <div>
                            <h3 className="text-center mb-4">Contact Us</h3>
                        </div>
                        <p>Contact us on Twitter at @Orphanshow</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default PrivacyPolicy;