

username
    string
    unique
    required
    trimmed

email 
    string
    required
    unique
    must match a valid email address

thoughts
    array of _id values referencing the Thought model

friends
    array of _id values referencing the User model (self-reference)


schema settings friendCount that retrieves the length of the user's friends array field on query

