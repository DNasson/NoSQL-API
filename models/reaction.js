reactionId
use mongoose's objectId data type
default value is set to a new objectId

reactionBody
string
required
280 character maximum

username
string
required

createdAt
Date
default value of the current timestamp
getter method to format the timestamp on query

schema settings
used as reaction field's subdocument schema in the Thought model