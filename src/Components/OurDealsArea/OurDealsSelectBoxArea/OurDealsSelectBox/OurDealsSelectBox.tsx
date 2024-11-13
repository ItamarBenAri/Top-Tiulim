/**
 * Component: OurDealsSelectBox
 * 
 * This component provides a multi-select dropdown for filtering deals based on selected countries.
 * It uses Material UI components styled with a custom theme and cache provider for RTL support.
 * The selected countries are updated locally, in the Redux store, and via the provided callback prop.
 */

import "./OurDealsSelectBox.css";
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import Chip from '@mui/material/Chip';
import { CacheProvider } from "@emotion/react";
import AppTheme from "../../../../Theme/AppTheme";
import { ourDealsService } from "../../../../Services/OurDealsService";
import { useSelector } from "react-redux";
import { AppState } from "../../../../Redux/AppState";
import OurDealsSelectBoxTheme from "./OurDealsSelectBoxTheme";

// Define component props for OurDealsSelectBox
type OurDealsSelectBoxProps = {
    countries: string[];                            // List of country options for filtering
    onChange: (selected: string[]) => void;         // Callback to notify parent component of selected countries
};

export function OurDealsSelectBox(props: OurDealsSelectBoxProps): JSX.Element {
    // Retrieve global state for currently selected countries
    const globalSelectedCountries = useSelector<AppState, string[]>(appState => appState.selectedCountries);
    
    // Local state to manage selected countries within the component
    const [selectedCountries, setSelectedCountries] = useState<string[]>(globalSelectedCountries);

    /**
     * Updates selected countries based on user input.
     * This function updates local state, notifies parent via onChange, and updates global state.
     *
     * @param event - The change event from the Select component
     */
    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const { target: { value } } = event;
        
        // Convert the selected values into an array of strings if needed
        const selected = typeof value === 'string' ? value.split(',') : value;
        
        // Update component's local state with selected countries
        setSelectedCountries(selected);
        
        // Invoke the parent's callback with selected countries
        props.onChange(selected);
        
        // Update the Redux store with new selected countries
        ourDealsService.updateSelectedCountries(selected);
    };

    return (
        <div className="OurDealsSelectBox">
            {/* Configure cache provider and theme provider for RTL styling and custom theme */}
            <CacheProvider value={AppTheme.cacheRtl}>
                <ThemeProvider theme={AppTheme.theme}>
                    <FormControl sx={OurDealsSelectBoxTheme.formControl}>
                        {/* Label for multi-select input */}
                        <InputLabel>סינון לפי יעדים</InputLabel>
                        
                        {/* Multi-select dropdown to choose countries */}
                        <Select
                            multiple
                            value={selectedCountries}
                            onChange={handleChange}
                            input={<OutlinedInput label="סינון לפי יעדים" />}
                            renderValue={(selected) => (
                                <Box sx={OurDealsSelectBoxTheme.selectBox}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={OurDealsSelectBoxTheme.menuProps}
                        >
                            {/* Map through countries prop to create a menu item for each country */}
                            {props.countries.map((country) => (
                                <MenuItem
                                    key={country}
                                    value={country}
                                >
                                    {country}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </ThemeProvider>
            </CacheProvider>
        </div>
    );
};