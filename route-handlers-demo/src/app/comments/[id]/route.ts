import {comments} from "../data";

export async function GET(_request: Request, {params}: {params: Promise<{id: string}>}) {
    // todolist for get comment by id
    // 1. Get the id from params
    // 2. Find the comment with the given id
    // 3. Return the comment as response
    const {id} = await params;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    return Response.json(comment);
}

export async function PATCH(
    // todolist for update comment
    // 1. Get the id from params
    // 2. Get the text from request body
    // 3. Find the comment to update
    // 4. Update the comment's text
    // 5. Return the updated comment as response
    request : Request,
    {params}: {params: Promise<{id: string}>}
) {
    const {id} = await params;
    const body = await request.json();
    const {text} = body;

    const index = comments.findIndex((comment) => comment.id === parseInt(id)); // Find the index of the comment to update
    comments[index].text = text;// Update the comment's text

    return Response.json(comments[index]);
}

export async function DELETE(_request: Request, {params}: {params: Promise<{id: string}>}) {
    // todolist for delete comment
    // 1. Get the id from params
    // 2. Find the index of the comment to delete
    // 3. Remove the comment from the array
    // 4. Return the deleted comment as response
    const {id} = await params;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    const  deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
}