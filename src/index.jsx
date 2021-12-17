import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './Pages/Home'
import Freelances from './Pages/Freelances'
import Survey from './Pages/Survey'
import Results from './Pages/Results'
import Profile from './Pages/Profile'

// Components
import Header from './Components/Header'
import Footer from './Components/Footer'
import Error from './Components/Error'
import { ThemeProvider, SurveyProvider } from './utils/context'

// Styles
import GlobalStyle from './utils/styles/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/results" element={<Results />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
