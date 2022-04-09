import React, { useState } from 'react';
import "./App.css";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const Uberduck = require('./uberDuck');

const theme = createTheme();

export default function App() {
    const [sound, setSound] = useState("");
    async function getQuote() {
        var quote;
        await fetch('https://api.kanye.rest/')
            .then(response => response.json())
            .then(quotes => { quote = quotes.quote + "..." });
        console.log(quote);
        const ud = new Uberduck("pub_dbqzdjstpysasbliys", "pk_a47ab9f4-6644-429d-92f3-23efea762082");
        const synth = ud.synthesize(quote, "kanye-west-rap");
        await synth.then(value => {
            const x = value;
            setSound(x.path);
        }).catch(err => {
            console.log(err);
        });
        const audio = new Audio(sound);
        audio.play();
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <div className="butt1">
                <Typography variant="h1" align="center">
                artificial yeezus
                    </Typography>
                    </div>
            <div align="center" className="butt2">
                    <Button align="center" onClick={() => {
                        
                        getQuote();

                        

                    }}>
                    <h1>
                        Seek Enlightenment
                    </h1>
                    </Button>
                </div>
                </main>
        </ThemeProvider>
    );
}
