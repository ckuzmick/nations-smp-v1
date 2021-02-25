import React from "react"
import { Link } from "gatsby"
import NavBar from "../components/layout/nav-bar.js"
import A from "../components/layout/article"
import S from "../components/layout/section"
import T from "../components/layout/law-text"
import { Helmet } from "react-helmet"

const SecondPage = () => (
  <div style={{
    margin: "30px",
  }}

  >

    <Helmet title="Laws & Rules | Nations SMP"></Helmet>
    <NavBar />
<br>
</br>

<A>Article I.</A>

<S>Section I</S>

<T>
Every individual on the SMP shall have the according rights and freedoms specified in Article 1. Individual rights shall take precedence over the collective rights specified in Article 2
</T>

<S>Section II</S>

<T>
Every individual shall be allowed to have freedom of speech, assembly, and thought. As well as the freedom to move, remain, and leave any Nation-State as well as to seek a livelihood in any Nation-State.
</T>

<S>Section III</S>

<T>
Every individual shall abide by the laws and legal system of their nation, as well as the criminal law specified in Article 3.
</T>

<A>Article II.</A>

<S>Section I</S>

<T>
    Each Nation-State is required to have at least 2 active players residing in it at all times, and it is also required that there shall be no more than 1,500 blocks in residence for each player. Each Nation-State has a player count of no more than 25% of the active players. Should the active player count change so that a nation-state has more than 25% of the active player count, the Nation-state’s block count will be decreased accordingly within the timeframe of 2 weeks and all builds in those areas will be allowed to be deconstructed without conflict within the timeframe regardless.
</T>

<S>Section II</S>

<T>
    	When a player is transferring Nations all of their items shall be allowed to transfer, however builds made in the area that no longer belong to their former Nation will be stripped of all expensive and annoying items and those items will be transferred to the player and/or the Nation. The build will be allowed to be deconstructed if so chosen or it will be left to the server community.
</T>

<S>Section III</S>

<T>
    	All players may enter, leave and join any Nation-state of their chosing however once they leave conditions may apply. See below:
</T>

<T>
    Factions may choose any of these conditions to apply to any player in or outside and inside the faction. 
</T>

<ul style={{
          fontFamily: "Benne",
          fontSize: "25px",
          letterSpacing: "2px",
          lineHeight: "1.1"
      }}>
  <li>Free passage and entry, may seek asylum</li>
  <li>Free passage and entry, may seek asylum. But not allowed to build.</li>
  <li>Entry is forbidden, no exceptions</li>
  <li>Passage allowed, no asylum, building or anything of the sort</li>
  <li>Free passage and entry, may not seek asylum</li>
  <li>Banned from faction under threat of violence</li>
  <li>Neutral, allowed inside faction areas but if they provoke the faction or break a law inside the area violence may ensue depentent on the context.</li>
</ul>

<A>Article III</A>

<S>Section I</S>

<T>
    Citizens of the Nations SMP shall abide by the laws of their Nation-State or faction, Factions and Nation-States may make their own laws as long as they do not conflict with the server rules. All players within the faction boundaries must comply with these laws under penalty of  faction/server punishments. 
</T>

    <Link to="/">Go back to the homepage</Link>

  </div>
)

export default SecondPage
