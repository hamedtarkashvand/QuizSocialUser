import {useMemo} from 'react';
import { ToggleButton, ToggleButtonGroup , styled } from '@mui/material';
import {LanguageContext} from '../context/languageContext';
import { useTranslation } from 'react-i18next';
import { ReactElement, useContext, useState } from 'react';



const ButtonGroupLanguage = ():ReactElement =>  {
    const {t} = useTranslation()
    const lan = useContext(LanguageContext)
    const [state , setState] = useState<"en"|"fa">(lan.language)

    const handel = useMemo(()=>({
        handleChange : (
          event: React.MouseEvent<HTMLElement>,
          newValue:'en'|'fa',
        ) => {
          setState(newValue);
          lan.toggleLanguage(newValue)
        }
    
    }),[state])

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newValue:'en'|'fa',
      ) => {
        setState(newValue);
        lan.toggleLanguage(newValue)
      };
    
    return (
        <MyStyleToggleButtonGroup
            color="standard"
            value={state}
            exclusive
            onChange={handel.handleChange}
            aria-label="Platform">
            <ToggleButton 

            value="fa">{t('persion')}</ToggleButton>
            <ToggleButton 
            value="en">{t('english')}</ToggleButton>
        </MyStyleToggleButtonGroup>
        )
}


const MyStyleToggleButtonGroup = 
styled(ToggleButtonGroup)({
    '& .MuiToggleButton-standard' : {
      border:0,
    },
    '& .MuiToggleButton-standard:hover' : {
      backgroundColor:'unset'
    },
    '& .Mui-selected' : {
      color:'rgb(255, 168, 46)!important',
      backgroundColor:'unset!important'
    }
})

export default ButtonGroupLanguage