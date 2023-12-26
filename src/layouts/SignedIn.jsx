import React from 'react'
import { Dropdown,Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/103516475?v=4"/>
            <Dropdown pointing="top left" text="User" >
              <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item text="Çıkış Yap" icon="sign-out" onClick={signOut}/>
              </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
