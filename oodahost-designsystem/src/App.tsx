//import { useState } from 'react'
import './App.css'
import { FaCheck } from "react-icons/fa";

import { ButtonPrimaryLightmode as ButtonPrimaryLightmode } from "@/components/ui/Button/Button-Primary-Lightmode";
import { ButtonOutlineLightmode as ButtonOutlineLightmode } from "@/components/ui/Button/Button-Outline-Lightmode";
import { ButtonGhostLightmode as ButtonGhostLightmode } from "@/components/ui/Button/Button-Ghost-Lightmode";
import { Button as IconButtonLightmode } from "@/components/ui/Button/Icon-Button-Lightmode";
//import { ButtonPrimaryLightmode as ButtonPrimaryLightmode } from "@/components/ui/Button/Button-Primary-Lightmode";
//import { ButtonPrimaryLightmode as ButtonPrimaryLightmode } from "@/components/ui/Button/Button-Primary-Lightmode";
import { Highlight } from './components/ui/Typography/Highlight/Highlight';
import { Body } from './components/ui/Typography/Body/Body';
import { Headline } from './components/ui/Typography/Headline/Headline';

function App() {
  return (
    <>
      <div className="p-8">
        {/* Pruebas de uso */}
      <ButtonPrimaryLightmode variant="primaryTextOnly">First button</ButtonPrimaryLightmode>
      <ButtonPrimaryLightmode variant="primaryLeftIcon" leftIcon={<FaCheck />}>second button</ButtonPrimaryLightmode>
      <ButtonPrimaryLightmode variant="primaryRightIcon">third button</ButtonPrimaryLightmode>
      <IconButtonLightmode variant="primaryIconButton">four button</IconButtonLightmode>
      <ButtonOutlineLightmode>Click me</ButtonOutlineLightmode>
      <ButtonGhostLightmode>Click me</ButtonGhostLightmode>
      
      <Headline size="xl">Headline xl</Headline>
      <Headline size="l">Headline l</Headline>
      <Headline size="m">Headline m</Headline>
      <Headline size="s">Headline s</Headline>
      <Headline size="xs">Headline xs</Headline>

      <Highlight size="xl">Highlight xl</Highlight>
      <Highlight size="l">Highlight l</Highlight>
      <Highlight size="m">Highlight m</Highlight>
      <Highlight size="s">Highlight s</Highlight>
      <Highlight size="xs">Highlight xs</Highlight>

      <Body size="xl">Body xl Lorem ipsum dolor</Body>
      <Body size="l">Body l Lorem ipsum dolor</Body>
      <Body size="m">Body m Lorem ipsum dolor</Body>
      <Body size="s">Body s Lorem ipsum dolor</Body>
      <Body size="xs">Body xs Lorem ipsum dolor</Body>
      
    </div>
    </>
  )
}

export default App
