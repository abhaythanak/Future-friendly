

const commentsData = [
    {
        name: "Abhay Thanak",
        text: "this is not good place to write your comments",
        replies: [],
    },
    {
        name: "Abhay Thanak",
        text: "this is not good place to write your comments",
        replies: [
,            {
                name: "Abhay Thanak",
                text: "this is not good place to write your comments",
                replies: [
                    {
                        name: "Abhay Thanak",
                        text: "this is not good place to write your comments",
                        replies: [
                            {
                                name: "Abhay Thanak",
                                text: "this is not good place to write your comments",
                                replies: [
                                    {
                                        name: "Abhay Thanak",
                                        text: "this is not good place to write your comments",
                                        replies: [
                                            {
                                                name: "Abhay Thanak",
                                                text: "this is not good place to write your comments",
                                                replies: [
                                                    {
                                                        name: "Abhay Thanak",
                                                        text: "this is not good place to write your comments",
                                                        replies: [
                                                            {
                                                                name: "Abhay Thanak",
                                                                text: "this is not good place to write your comments",
                                                                replies: [
                                                                    {
                                                                        name: "Abhay Thanak",
                                                                        text: "this is not good place to write your comments",
                                                                        replies: [
                                                                            {
                                                                                name: "Abhay Thanak",
                                                                                text: "this is not good place to write your comments",
                                                                                replies: [
                                                                                    {
                                                                                        name: "Abhay Thanak",
                                                                                        text: "this is not good place to write your comments",
                                                                                        replies: [],
                                                                                    },
                                                                                ],
                                                                            },
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ]
    },
    {
        name: "Abhay Thanak",
        text: "this is not good place to write your comments",
        replies: [
,            {
                name: "Abhay Thanak",
                text: "this is not good place to write your comments",
                replies: [],
            },
        ]
    },
    {
        name: "Abhay Thanak",
        text: "this is not good place to write your comments",
        replies: [
,            {
                name: "Abhay Thanak",
                text: "this is not good place to write your comments",
                replies: [],
            },
        ]
    },
    {
        name: "Abhay Thanak",
        text: "this is not good place to write your comments",
        replies: [],
    },
];

const Comment= ({data}) => {
    const {name, text, replies} = data;
    return ( 
    <div className="flex shadow-md bg-gray-200 rounded-md my-2">
        <img
        className="w-12 h-12" 
        src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" 
        alt="user" />
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
 );
}

const CommentsList = ({comments}) => {
    //hard coded data and we cannot pass the id thats why using Key as index
    return  comments.map((comment, index) => ( 
    <div className="" key={index}>
        <Comment  data = {comment} />

        <div className="pl-5 border-l-black ml-5">
         {/* <Comment key={index} data = {comment} />
         <Comment key={index} data = {comment} /> */}
         <CommentsList comments={comment.replies}/>
         
    </div>
    </div> 

    )); 
}
export default function CommentsContainer() {
    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comments:</h1>
            {/* <Comment data={commentsData[0]}/> */}
            <CommentsList comments={commentsData}/>
        </div>
    )
};
