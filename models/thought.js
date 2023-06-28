thoughtText
    string 
    required
    must be between 1 and 280 characters

createdAt
    Date
    default value of the current timestamp
    getter method to format the timestamp on query

username
    string
    required

reactions (These are like replies)
    array of nested documents created with the reactionSchema

create virtual called reactionCount that retrieves the length of the thought's reactions array field on query