
import rerenderEntireTree from '../render';


const state = {
    dialogPage: {
        messages: [
            {
                id: "1",
                message: "Hi",
            },
            {
                id: "2",
                message: "How are you",
            },
            {
                id: "3",
                message: "Yo",
            },
            {
                id: "4",
                message: "Yo",
            },
            {
                id: "5",
                message: "Yo",
            },
            {
                id: "6",
                message: "Yo",
            },
            {
                id: "7",
                message: "koko",
            },
            {
                id: "8",
                message: "Yo",
            },
        ],
        dialogs : [
            {
                name: "Valer",
                id: "1"
            },
            {
                name: "Janna",
                id: "2"
            },
            {
                name: "Lyov",
                id: "3"
            },
            {
                name: "Nara",
                id: "4"
            },
            {
                name: "Ruzan",
                id: "5"
            },
            {
                name: "Miqo",
                id: "6"
            },
            {
                name: "Alik",
                id: "7"
            },
            {
                name: "Consuela",
                id: "8"
            },
        
        ]

    },
    postPage : {
        posts :  [
            {
                id : "1",
                message : "Hi, how are you?",
                likesCount : 12
            },
            {
                id : "2",
                message : "It's my first posts",
                likesCount : 11
            },
            {
                id : "3",
                message : "blabla",
                likesCount : 4
            },
            {
                id : "4",
                message : "blablabla",
                likesCount : 55
            }
        ]
    }

}


export const addPosts = (postMessage) => {
    // console.log('addPosts postMessage', postMessage);
    const newPost = {
            id : "5",
            message : postMessage,
            likesCount : 0
    }
    state.postPage.posts.push(newPost);
    rerenderEntireTree(state);//give new state added object
}

export default state;