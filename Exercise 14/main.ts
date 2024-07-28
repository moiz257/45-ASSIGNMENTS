// Exercise 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest:string[]=[ "salma","ameen","altaf","najma"]
guest.map((Guest)  => console.log(`dear, ${Guest} you are invited to the dinner tonight.`));
