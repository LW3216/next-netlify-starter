

#  DND Character Creator

## Overview

Tabletop fantasy gamers can easily lose track of their characters' names, classes, stats, skills, personalities, and background stories as their journey progresses. Now worry no more with the DND Character Creator!

DND Character Creator is a web app that will allow users to keep track of multiple character sheets. Users can register and login. Once they're logged in, they can create or view their character sheets. For every sheet that they have, they can edit their character's names, classes, stats, skills, personalities, and background stories. The app will also calculate bonuses from items and embed them to stats. 

## Data Model

The application will store Users, Lists and Items

* users can have multiple characters (via references)
* each character can have multiple stats, skills, personalities (by embedding)

An Example User:

```javascript
{
  username: "WizardsOftheCoast",
  hash: // a password hash, 
  lists: // an array of references to List documents
}
```

An Example Character with Embedded Items:

```javascript
{
  user: // a reference to a User object
  name: "Mordenkainen",
  class: "Mage",
  stats: [
    { name: "STRENGTH", base: 11, bonus: 0},
    { name: "DEXTERITY", base: 13, bonus: 0},
    { name: "CONSTITUTION", base: 14, bonus: 0},
    { name: "INTELLIGENCE", base: 16, bonus: 12},
    { name: "WISDOM", base: 14, bonus: 0},
    { name: "CHARISMA", base: 12, bonus: 0},
  ]
  items: [
    { name: "Wand Of Archmage", bonusname: "INTELLIGENCE", bonusno: 12},
  ],
  personalities: [
    {traits: "alcoholic"},
    {ideals: "get married after this journey"},
    {bonds: "friend of Bigby"},
    {flaws: "darkness"}
    ],
  stories: "To be filled.",
  createdAt: //time created.
}
```


## [Link to Commented First Draft Schema](db.mjs) 

## Wireframes

/login - page for login

![login](/public/documentation/login.jpg)

/newuser - page for creating new account

![new](/public/documentation/new.jpg)

/char - page for showing all characters

![chars](/public/documentation/chars.jpg)

/char/create - page for creating a new character

![char create](/public/documentation/charcreate.jpg)

/char/create/item - page for creating a new item

![char create item](/public/documentation/additem.jpg)

/char/slug - page for showing specific character

![char](/public/documentation/slug.jpg)

/char/slug/edit - page for edit a character

![char edit](/public/documentation/edit.jpg)

/char/slug/remove - page for removing an item

![char edit](/public/documentation/remove.jpg)

## Site map

![site](/public/documentation/site.jpg)

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create a character
4. as a user, I can view all of the characters I've created in a single list
5. as a user, I can add/remove items to an existing character
6. as a user, I can edit stats of an existing character
7. as a user, I can edit personalities of an existing character
8. as a user, I can edit stories of an existing character

## Research Topics

* (5 points) Integrate user authentication
    * What is it?
        * A way to verify users from an existing repository of users and passwords.
    * Why?
        * So that users do not mix their characters together. Each user should access its database only.
    * List of Possible Solutions?
        * Okta, PassportJS, Auth0, Permit, etc.
    * Points?
        * 5 points. Never tried this stuff before.
* (3 points) Unit Testings
    * What is it?
        * A way to verify whether or not my code will work as I picture it would.
    * Why?
        * So that bugs are found and fixed easily and higher code quality is ensured.
    * List of Possible Solutions?
        * Jest, Mocha, Jasmine, Cypress, etc.
    * Points?
        * 3 points. Considering the fact that we have used Mocha in previous HWs.

8 points total out of 8 required points.


## [Link to Initial Main Project File](app.mjs) 
## Annotations / References Used


1. [jest unit testing docs](https://www.softwaretestinghelp.com/jest-testing-tutorial/)


## Additional Note for Milestone 3
I have a Mid-term coming up tomorrow. Will be updating the files on Wed.