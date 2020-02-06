var container = document.querySelector('.container-fluid');

function createNewElement(element, tag, text, classes, link)
{
    var newElement = document.createElement(tag);
    if (classes.length > 0)
    {
        newElement.className = classes;
    }
    if (text.length > 0)
    {
        newElement.textContent = text;
    }
    if (tag == 'a')
    {
        newElement.setAttribute('href', link)
    }
    element.append(newElement);
    return newElement;
}

var header = createNewElement(container, 'div', '', "header row header bg-warning align-items-center m-5", '')


createNewElement(header, "div", "HighOnCoding", "h1 col-5", '')
createNewElement(header, "a", "Home", "h2 col-2", '#')
createNewElement(header, "a", "Category", "h2 col-2", "#")

var main1 = createNewElement(container, 'div', '', "secondDiv column space-between align-items-center p-5", '')

createNewElement(main1, 'div', "Curse of the Current Reviews", "h2 d-flex", '')
createNewElement(main1, 'div', 'When you buy an application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.', "d-flex space-between", '')

var main2 = createNewElement(container, 'div', '', "column main2 bg-light p-5", '')

createNewElement(main2, 'a', 'Hello WatchKit', "display-4 d-flex", '')
createNewElement(main2, 'div', 'Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developer to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.', 'd-flex', '')
var bottomBar1 = createNewElement(main2, 'div', '', 'bg-warning row d-flex', '')
createNewElement(bottomBar1, 'div', '12 Comments', 'col-3', '')
createNewElement(bottomBar1, 'div', '124 Likes', 'col-3', '')

var main3 = createNewElement(container, 'div', '', "column main2 bg-light p-5", '')

createNewElement(main3, 'a', 'Introduction to Swift', "display-4 d-flex", '')
createNewElement(main3, 'div', 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started', 'd-flex', '')
var bottomBar1 = createNewElement(main3, 'div', '', 'bg-warning row d-flex', '')
createNewElement(bottomBar1, 'div', '15 Comments', 'col-3', '')
createNewElement(bottomBar1, 'div', '45 Likes', 'col-3', '')