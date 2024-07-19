import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { type CardData } from "./cardData";

import { useState, useEffect } from "react";

export const Card = ({
  animation,
  alt,
  headline,
  panelOne,
  panelTwo,
  animationStart,
  logoImg,
}: CardData) => {

  const [titleIsVisible, setTitleIsVisible] = useState(false);
  const [panelOneIsVisible, setPanelOneIsVisible] = useState(false);
  const [panelTwoIsVisible, setPanelTwoIsVisible] = useState(false);

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
    rootMargin: '10000000px 0px 0px 0px'
  });
  const { ref: panelOneRefOne, inView: panelOneV1InView } = useInView({
    triggerOnce: false,
    threshold: 0.8,
    rootMargin: '10000000px 0px 0px 0px',
  });
  const { ref: panelOneRefTwo, inView: panelOneV2InView } = useInView({
    triggerOnce: false,
    threshold: 0.9,
    rootMargin: '10000000px 0px -100px 0px',
  });
  const { ref: panelTwoRef, inView: panelTwoInView } = useInView({
    triggerOnce: false,
    threshold: 0.9,
    rootMargin: '10000000px 0px 0px 0px',
  });
  
  useEffect(() => {
    if(titleInView) {
      setTitleIsVisible(true)
    }
    else {
      setTitleIsVisible(false)
    }
  }, [titleInView])

  useEffect(() => {
    if(panelOneV1InView || panelOneV2InView) {
      setPanelOneIsVisible(true)
    } else {
      setPanelOneIsVisible(false)
    }
  }, [panelOneV1InView, panelOneV2InView])

  useEffect(() => {
    if(panelTwoInView) {
      setPanelTwoIsVisible(true)
    } else {
      setPanelTwoIsVisible(false)
    }

  }, [panelTwoInView, panelTwoIsVisible])


  return (
    <div
      id={headline}
      className={
        (animationStart ? "flex md:flex-row" : "flex md:flex-row-reverse") +
        " sm:flex-col lg:my-3 md:my-2.5 w-4/5 sm:h-auto lg:h-[580px] md:h-[400px] landscape:md:h-[580px] items-center justify-center text-white max-w-7xl"
      }
    >
      <div
        ref={titleRef}
        className={
          (animationStart ? "" : "sm:ml-0 md:ml-5 lg:ml-6") +
          " max-md:h-[350px] my-2 flex flex-col max-md:w-full w-3/5 rounded-xl bg-transparent h-full p-px border-[1px] border-indigo-200" +
          ` transition-opacity duration-1000` +
          ` ${titleIsVisible ? "opacity-100" : "opacity-0"}`
        }
      >
        <div
          className={`
            w-full
            h-full
            rounded-xl
            bg-transparent
            flex
            flex-col
          `}
        >
          <h3 className="text-center py-4 my-14 lg:text-7xl md:text-5xl sm:text-3xl sm:my-6 text-transparent
                bg-clip-text
                bg-gradient-to-br
                from-green-200
                via-indigo-200
                to-purple-300">{headline}</h3>
          <Image
            className="flex flex-col text-center md:w-9/12 sm:w-full md:mt-10 sm:mt-8 mx-auto "
            src={logoImg}
            alt={alt}
            width={50}
            height={50}
          />
        </div>
      </div>
      <div
        className={
          (animationStart ? "sm:ml-0 md:ml-5 lg:ml-6" : "") + " max-md:my-2 text-white sm:w-full md:w-2/5 flex-col h-full flex outer " + 
          `${panelOneIsVisible ? "opacity-100" : "opacity-0"} 
            transition-opacity duration-1000`
        }
      >
        <div
          ref={panelTwo ? panelOneRefTwo : panelOneRefOne}
          className={`
            flex
            my-auto
            h-full
            max-md:h-auto
            flex-col
            space-y-4
            p-px
            border-0
            rounded-xl
            bg-transparent
            border-indigo-200
            border-[1px]
         `}
        >
          <div
            className={`
              rounded-xl
              h-full
              flex
              flex-col
              justify-center
              panel1
              max-md:py-6
              bg-transparent
            `}
          >
            
            {panelOne.content.map((text, key) => {return (
              <div 
              key={key}
              className="
              my-5
              text-transparent
              bg-clip-text
              bg-gradient-to-br
              from-green-200
              via-indigo-200
              to-purple-300
              lg:px-10
              md:px-6
              lg:space-y-6
              md:space-y-1
              landscape:md:space-y-6
              sm:space-y-4
              self-center
              max-md:h-fit
              flex
              flex-col
            ">
                    <p
                      className="lg:text-5xl md:text-3xl landscape:max-md:text-4xl max-sm:text-xl "
                         //"lg:text-5xl md:text-2xl landscape:md:text-5xl sm:text-3xl ") + "mx-2 max-md:mx-10 whitespace-pre-wrap text-center leading-loose"
                      
                    >
                      {text}
                    </p></div>
                  );})}
          </div>
        </div>
      </div>
    </div>
  );
};
