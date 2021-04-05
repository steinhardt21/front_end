/**
 * Here is the component that is definining the layouout for the
 * entire part of the Admin area
 */
import {Helmet} from "react-helmet" //It includes the code in the <head> tag of the HTML page
import React, { Fragment } from 'react'
import MetaTags from "react-meta-tags"

export const LayoutAdmin = () => {
    return (
        <Fragment>
            <Helmet>
                <MetaTags>
                    
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />
                 </MetaTags>

                    <title>Admin area</title>

                    {/* <!-- Custom fonts for this template--> */}
                    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
                    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

                    {/* <!-- Custom styles for this template--> */}
                    <link href="https://startbootstrap.github.io/startbootstrap-sb-admin-2/css/sb-admin-2.min.css" rel="stylesheet" />
                    
               
            </Helmet>
        </Fragment>
    )
}


export default LayoutAdmin;