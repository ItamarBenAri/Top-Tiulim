/**
 * Component: OurDealsSelectBox
 *
 * This component renders a multi-select dropdown for filtering deals based on selected countries.
 * It leverages Material-UI components and is styled with a custom theme and an RTL cache provider.
 * The selected countries are tracked both locally and globally, updating the Redux store and 
 * notifying the parent component via a callback. Additionally, a toast notification appears when
 * the selected countries change to inform the user of updates.
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
import { Flip, toast } from "react-toastify";

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
    const [open, setOpen] = useState(false); // Tracks dropdown open state

    /**
     * handleChange
     * 
     * Updates selected countries based on user input.
     * Synchronizes local component state, invokes the parent onChange callback,
     * and updates the global Redux store with the selected countries.
     *
     * @param event - The change event from the Select component
     */
    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const { target: { value } } = event;

        // Convert selected values into an array of strings if needed
        const selected = typeof value === 'string' ? value.split(',') : value;

        // Update local state
        setSelectedCountries(selected);

        // Trigger parent callback with updated selection
        props.onChange(selected);

        // Update global Redux state with new selection
        ourDealsService.updateSelectedCountries(selected);

        notifyDealsUpdate(selected);
    };

    /**
     * handleDelete
     * 
     * Handles removal of a selected country from the selection list. 
     * Removes the country from local state, invokes the parent's onChange callback,
     * and updates the Redux store to reflect the current selection.
    *
    * @param countryToDelete - The country to remove from the selection
    */
    const handleDelete = (countryToDelete: string) => {
        const updatedSelected = selectedCountries.filter(country => country !== countryToDelete);

        setSelectedCountries(updatedSelected);
        props.onChange(updatedSelected);
        ourDealsService.updateSelectedCountries(updatedSelected);
        notifyDealsUpdate(updatedSelected);
    };

    /**
     * toggleOpen
     *
     * Toggles the open/closed state of the Select dropdown.
     */
    const toggleOpen = () => setOpen(!open);

    /**
     * notifyDealsUpdate
     * 
     * Displays a toast notification to inform users of deal updates based on selected countries.
     *
     * @param selectedCountries - The array of currently selected countries
     */
    const notifyDealsUpdate = (selectedCountries: string[]) => {
        const message = selectedCountries.length > 0
            ? "הדילים עודכנו לפי הסינון שלך"
            : "מציג את כל הדילים";

        toast.info(message, {
            autoClose: 2000,
            transition: Flip,
            hideProgressBar: true
        });
    };

    return (
        <div className="OurDealsSelectBox">
            {/* CacheProvider and ThemeProvider for RTL support and custom theme styling */}
            <CacheProvider value={AppTheme.cacheRtl}>
                <ThemeProvider theme={AppTheme.theme}>
                    <FormControl sx={OurDealsSelectBoxTheme.formControl}>
                        {/* Label for multi-select input */}
                        <InputLabel sx={{zIndex: 0}}>סינון לפי יעדים</InputLabel>

                        {/* Multi-select dropdown for selecting countries */}
                        <Select
                            multiple
                            open={open}
                            onClick={toggleOpen}
                            onClose={() => setOpen(false)}
                            value={selectedCountries}
                            onChange={handleChange}
                            input={<OutlinedInput label="סינון לפי יעדים" />}
                            renderValue={(selected) => (
                                <Box sx={OurDealsSelectBoxTheme.selectBox}>
                                    {selected.map((value) => (
                                        <Chip
                                            key={value}
                                            label={value}
                                            onDelete={() => handleDelete(value)}
                                            sx={{ zIndex: 2000 }} // Ensures delete icon on chip is accessible above dropdown
                                        />
                                    ))}
                                </Box>
                            )}
                            MenuProps={OurDealsSelectBoxTheme.menuProps}
                        >
                            {/* Generate menu items from provided country list */}
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