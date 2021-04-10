import axios from 'axios'
import {setAlert} from './alert'

import {
    GET_PROJECTS,
    PROJECT_ERROR,
    UPDATE_PROFILE,
    GET_PROJECT_SHOWCASE,
    UPDATE_LIKES,
    DELETE_PROJECT,
    ADD_PROJECT,
    GET_PROJECT,
    GET_PROJECTS_SHOWCASE,
    GET_PROJECTS_OF_THE_USER, 
    GET_PROJECT_INDUSTRIES,
    ADD_CALL_PROJECT,
    GET_PROJECT_INDUSTRY,
    PROJECT_INFO_ERROR,
    GET_CALLS,
    GET_CALL_INFORMATION,
    GET_USER_CALLS,
    GET_PUBLIC_CALLS,
    GET_OWNER_PROJECT
} from './types'

//Get the calls made by the user
export const getUserCalls = () => async dispatch => {
    try{
        const res = await axios.get('/api/projects/usercalls')
        dispatch({
            type: GET_USER_CALLS,
            payload: res.data
         })

    }catch(err)
    {    dispatch({
            type: PROJECT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}


//Get the projects of the user
export const getProjectsofTheUser = () => async dispatch => {
    try{    
         const res = await axios.get('/api/projects/user');

         dispatch({
            type: GET_PROJECTS_OF_THE_USER,
            payload: res.data
         })

    }catch(err)
    {    dispatch({
            type: PROJECT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}

//Get the calls for the projects
export const getCalls = () => async dispatch => {
    try{    
        const res = await axios.get('/api/projects/calls');

         dispatch({
            type: GET_CALLS,
            payload: res.data
         })

    }catch(err)
    {    dispatch({
            type: PROJECT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}

//Get the public
export const getPublicCalls = () => async dispatch => {
    try{    
        const res = await axios.get('/api/projects/public-calls');

         dispatch({
            type: GET_PUBLIC_CALLS,
            payload: res.data
         })

    }catch(err)
    {    dispatch({
            type: PROJECT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}

//Get projects
export const getProjects = () => async dispatch =>{
    try{
        const res = await axios.get('/api/projects')

        dispatch({
            type: GET_PROJECTS,
            payload: res.data
        })
    }catch(err)
    {
        dispatch({
            type: PROJECT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }

}

//Get projects for Showcase
export const getProjectsShowcase = () => async dispatch => {
    try{

        const res = await axios.get('/api/projects/showcase')

        dispatch({
            type: GET_PROJECTS_SHOWCASE,
            payload:res.data
        })
    }
    catch(err)
    {
        dispatch({
            type: PROJECT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}

//get project
export const getProjectById = projectId => async dispatch => {
    try{
        console.log("I am here")
        const res = await axios.get(`/api/projects/${projectId}`)

        console.log("donwload")
        console.log(res.data)

        dispatch({
            type: GET_PROJECT,
            payload: res.data
        })

    }catch(err)
    {
        dispatch({
            type: PROJECT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}

//get project PUBLIC
export const getProjectPublicById = projectId => async dispatch => {
    try{
        const res = await axios.get(`/api/projects/showcase/${projectId}`)

        dispatch({
            type: GET_PROJECT_SHOWCASE,
            payload: res.data
        })
    }catch(err)
    {
        dispatch({
            type: PROJECT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}

export const getProjectOwner = projectId => async dispatch => {
  try {
    const res = await axios.get(`/api/projects/owner/${projectId}`)
    dispatch({
        type: GET_OWNER_PROJECT,
        payload: res.data
    })
  } catch (err) {
    dispatch({
        type: PROJECT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}


//get Call informtion
export const getCallInformation = callId => async dispatch => {
    try{

        console.log('**11', 'call effettuata')
        const res = await axios.get(`/api/projects/call/${callId}`)
        console.log('**11', 'call ritornata')


        dispatch({
            type: GET_CALL_INFORMATION,
            payload: res.data
        })

    }catch(err)
    {
        dispatch({
            type: PROJECT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}


//add Like
export const addLike = projectId => async dispatch =>{
    try{
        const res = await axios.put(`/api/projects/like/${projectId}`)

        dispatch({
            type: UPDATE_LIKES,
            payload: {projectId, likes: res.data}
        })
    }catch(err)
    {
        dispatch({
            type: PROJECT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}

// Remove like
export const removeLike = projectId => async dispatch =>{
    try{
        const res = await axios.put(`/api/projects/like/${projectId}`)

        dispatch({
            type: UPDATE_LIKES,
            payload: {projectId, likes: res.data}
        })
    }catch(err)
    {
        dispatch({
            type: PROJECT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }

}

// Remove project
export const deleteProject = (projectId, history = null) => async dispatch =>{
    try{
        await axios.delete(`/api/projectS/${projectId}`)

        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })

        dispatch(setAlert('Project Removed', 'success'))

        if(history != null) {
            history.push('/dashboard')
        }

    }catch(err)
    {
        dispatch({
            type: PROJECT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }

}

// Add project
// export const addProject = formData => async dispatch =>{
    
//     const config = {
//         headers: {
//             'Content-Type' : 'application/json'
//         }
//     }

//     try{
//          const res = await axios.post(`/api/projects`, formData, config)

//         dispatch({
//             type: ADD_PROJECT,
//             payload: res.data
//         })

//         dispatch(setAlert('Project Removed', 'success'))
//     }catch(err)
//     {
//         dispatch({
//             type: PROJECT_ERROR,
//             payload: { msg: err.response.statusText, status: err.response.status }
//           });
//     }

// }


// //Create or update project
// //NOTE: history is used to redirect then to the Dashboard
// //NOTE: the edit parametere is used to know if the project is edited or created
// export const createProject = (formData, history, edited = false) => async dispatch =>{
   
//      const config = {

//         headers: {

//             'Content-Type' : 'application/json'
//         }
//     } 

    
//     try{

//         const res = await axios.post(`/api/projects`, formData, config)

//         dispatch({
//             type: ADD_PROJECT,
//             payload: res.data
//         })

//         dispatch(setAlert(edited ? 'Project Updated' : 'Project Created', 'success'))

//         // Redirect the user when a new project is created
//         if(!edited) {
//             history.push('/dashboard')
//         }
//     }
//     catch(err)
//     {
//         const errors = err.response.data.errors
        
//         //Show the errors
//         if(errors){
//             errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
//         }

//         dispatch({
//             type: PROJECT_ERROR,
//             payload: { msg: err.response.statusText, status: err.response.status }
//           });
//     }

// }


//Create or update project
//NOTE: history is used to redirect then to the Dashboard
//NOTE: the edit parametere is used to know if the project is edited or created
export const createProject = (formData, history, edited = false) => async dispatch =>{
   
    const config = {
       headers: {'Content-Type' : 'application/json'}
    } 

   
   try{                
       const res = await axios.post(`/api/projects`, formData, config)

       dispatch({
           type: ADD_PROJECT,
           payload: res.data
       })
       console.log('new project', res.data)
       dispatch(setAlert(edited ? 'Project Updated' : 'Project Created', 'success'))

    //    Redirect the user when a new project is created
        history.push(`/create-candidature/${res.data._id}`)
   }
   catch(err)
   {
       const errors = err.response.data.errors
       
       //Show the errors
       if(errors){
           errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
       }

       dispatch({
           type: PROJECT_ERROR,
           payload: { msg: err.response.statusText, status: err.response.status }
         });
   }

}




//Create call for a project
//NOTE: history is used to redirect then to the Dashboard
//NOTE: the edit parametere is used to know if the project is edited or created
export const createCallProject = (formData, history, edited = false) => async dispatch =>{
   
    const config = {
       headers: {'Content-Type' : 'application/json'}
    } 
    console.log("sent the creation call")    
   try{         
          
       const res = await axios.post(`/api/projects/new-call`, formData, config)

       dispatch({
           type: ADD_CALL_PROJECT,
           payload: res.data
       })

       dispatch(setAlert(edited ? 'Project Updated' : 'Call per il progetto creata', 'success'))

    //    Redirect the user when a new project is created
    //    if(!edited) {
    //        history.push('/newversion/create-candidature')
    //    }
   }
   catch(err)
   {
       const errors = err.response.data.errors
       
       //Show the errors
       if(errors){
           errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
       }

       dispatch({
           type: PROJECT_ERROR,
           payload: { msg: err.response.statusText, status: err.response.status }
         });
   }

}

//get project
export const getProjectIndustryById = projectId => async dispatch => {
    try{
        const res = await axios.get(`/api/projects/industry/${projectId}`)

        console.log("res")
        console.log(res.data)

        dispatch({
            type: GET_PROJECT_INDUSTRY,
            payload: res.data
        })

    }catch(err)
    {
        dispatch({
            type: PROJECT_INFO_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}