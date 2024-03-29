# Photo Gallery Search Application

## General Usage

- User can search any keyword, and will get photos related to that word
- Initially, 20 popular photos are shown
- LOAD MORE button loads additional 20 photos
- User can click on the photo and see full resolution of the image
- The DOWNLOADS, VIEWS and LIKES are shown below the full image
- The searched words are stored locally and shown in HISTORY page
- Reshowing searched content after clicking the words in HISTORY page

## More technical explanation

- Used React built-in ContextApi to store history of searched words
- Used useEffect hook to trigger re-renders, depending on the query or page numbers of the data
- Made custom hook to get data - no matter how (from fetch or from local)
- Photo data comes from Unsplash API
- Data in both pages renders conditionaly: if the word is new, it will make a request, else it will get the data from local storage
- To avoid unnecessary re-renders, input triggers in one second after last change event - so no enter button is needed

## Information

- The project is made for "Sweeft - making sciense" acceleration programme
- Project author: Luka Chubinidze
- Time spent: nearly 3 days
- Recourses used: Unsplash API
- First touch with Typescript
