import React from 'react'
import { Card, Button } from 'reactstrap'

const TextBox = () => {
    return (
        <div className='text-box'>
            <h3>بسم الله الرحمن الرحيم</h3>
            <p>Tanpa mengurangi rasa hormat kami, dengan segala kerendahan hati, kami mengundang Bapak/Ibu/Saudara untuk
                berkenan menghadiri pesta sederhana pernikahan kami pada:
            </p>
            <Card className='cards p-3'>
                <h4>Tanggal 1 Juli 2022</h4>
                <hr />
                <div><i>Bertempat di</i></div>
                <h4>Aula Kecamatan Tingkir</h4>
                <a target="_blank" rel='noreferrer' href='https://goo.gl/maps/MLZHuxjExiQLm6Cz8'>
                    <Button>
                        Buka Map
                    </Button>
                </a>
            </Card>
        </div>
    )
}

export default TextBox
