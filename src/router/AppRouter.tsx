import { Routes, Route, Navigate } from 'react-router-dom'
import PromoPage from '@pages/PromoPage/PromoPage'
import Messenger from '@pages/Messenger/Messenger'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PromoPage />} />
      <Route path="/messenger" element={<Messenger />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRouter