import {comments} from "../data";

export async function GET(_request: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    return Response.json(comment);
}

export async function PATCH(
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