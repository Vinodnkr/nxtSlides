import {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

import SlideItem from '../SlideItem'
import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

const NxtSlides = () => {
  const [active, setActive] = useState(0)
  const getSlidesList = JSON.parse(localStorage.getItem('slidesList'))
  const [slidesList, setSlidesList] = useState(
    getSlidesList === null ? initialSlidesList : getSlidesList,
  )
  const [headingClicked, setHeadingClicked] = useState(false)
  const [descriptionClicked, setDescriptionClicked] = useState(false)
  useEffect(() => {
    localStorage.setItem('slidesList', JSON.stringify(slidesList))
  }, [slidesList])
  useEffect(() => {
    const getList = JSON.parse(localStorage.getItem('slidesList'))
    if (getList) {
      setSlidesList(getList)
    }
  }, [])
  const clickSlideItem = value => setActive(value)
  const newObj = () => {
    const addObj = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    const beforeList = slidesList.slice(0, active + 1)
    const afterList = slidesList.slice(active + 1)
    const newSlidesList = [...beforeList, addObj, ...afterList]
    setSlidesList(newSlidesList)
    setActive(active + 1)
  }
  const changeHeading = event => {
    const obj = slidesList[active]
    const addObj = {
      id: obj.id,
      heading: event.target.value,
      description: obj.description,
    }
    const beforeList = slidesList.slice(0, active)
    const afterList = slidesList.slice(active + 1)
    const newSlidesList = [...beforeList, addObj, ...afterList]
    setSlidesList(newSlidesList)
  }
  const changeHeadingFocus = () => {
    const obj = slidesList[active]
    const addObj = {
      id: obj.id,
      heading: obj.heading.length === 0 ? 'Heading' : obj.heading,
      description: obj.description,
    }
    const beforeList = slidesList.slice(0, active)
    const afterList = slidesList.slice(active + 1)
    const newSlidesList = [...beforeList, addObj, ...afterList]
    setSlidesList(newSlidesList)
    setHeadingClicked(false)
  }
  const changeDescription = event => {
    const obj = slidesList[active]
    const addObj = {
      id: obj.id,
      heading: obj.heading,
      description: event.target.value,
    }
    const beforeList = slidesList.slice(0, active)
    const afterList = slidesList.slice(active + 1)
    const newSlidesList = [...beforeList, addObj, ...afterList]
    setSlidesList(newSlidesList)
  }
  const changeDescriptionFocus = () => {
    const obj = slidesList[active]
    const addObj = {
      id: obj.id,
      heading: obj.heading,
      description:
        obj.description.length === 0 ? 'Description' : obj.description,
    }
    const beforeList = slidesList.slice(0, active)
    const afterList = slidesList.slice(active + 1)
    const newSlidesList = [...beforeList, addObj, ...afterList]
    setSlidesList(newSlidesList)
    setDescriptionClicked(false)
  }
  return (
    <div testid="slide" className="bg-container">
      <div>
        <button type="button" className="new-button" onClick={newObj}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="plus"
          />
          New
        </button>
      </div>
      <div className="slides-container">
        <ol className="slides-items">
          {slidesList.map((obj, index) => (
            <SlideItem
              key={obj.id}
              slideItem={obj}
              number={index + 1}
              isActive={active + 1}
              clickSlideItem={clickSlideItem}
            />
          ))}
        </ol>
        <div className="slide-container">
          <div className="slider">
            {headingClicked ? (
              <input
                type="text"
                value={slidesList[active].heading}
                className="slider-heading input"
                onFocus={() => setHeadingClicked(true)}
                onBlur={changeHeadingFocus}
                onChange={changeHeading}
              />
            ) : (
              <h1
                className="slider-heading"
                onClick={() => {
                  setHeadingClicked(true)
                  setDescriptionClicked(false)
                }}
              >
                {slidesList[active].heading}
              </h1>
            )}
            {descriptionClicked ? (
              <input
                type="text"
                className="slider-description input"
                value={slidesList[active].description}
                onFocus={() => setDescriptionClicked(true)}
                onBlur={changeDescriptionFocus}
                onChange={changeDescription}
              />
            ) : (
              <p
                className="slider-description"
                onClick={() => {
                  setDescriptionClicked(true)
                  setHeadingClicked(false)
                }}
              >
                {slidesList[active].description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NxtSlides
