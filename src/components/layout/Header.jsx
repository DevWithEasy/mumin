import base_url from '../../utils/base_url'
import { SettingsModal } from '../SettingModal'

export default function Header() {
  return (
    <div
      className="h-12 px-2 flex justify-between items-center shadow-md"
    >
      <div
        className='flex items-center space-x-1'
      >
        <img
          src={`${base_url}/icon.png`}
          className='h-8 w-6'
        />
        <p className='text-xl font-bold'>মুমিন</p>
      </div>
      <SettingsModal/>
    </div>
  )
}
