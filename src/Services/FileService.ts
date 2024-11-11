/**
 * FileService
 * ------------
 * This service is responsible for fetching and reading data from an Excel file, specifically targeting a sheet by name.
 * It leverages Axios for HTTP requests and XLSX library functions to parse and process Excel data.
 * 
 * Imports:
 * - `axios`: Library for handling HTTP requests.
 * - `appConfig`: Contains configuration settings, including the source URL for the Excel file.
 * - `XLSX`: Library used to read and parse Excel files.
 */

import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import * as XLSX from "xlsx";

class FileService {
    
    /**
     * fetchDataFromExcel
     * ------------------
     * Fetches data from an Excel file located at a specified URL and parses the content of a given sheet.
     * 
     * @param {string} sheetName - The name of the sheet to read data from.
     * @returns {Promise<any[]>} - A promise that resolves with an array of objects representing each row in the sheet.
     * 
     * Throws:
     * - An error if the specified sheet does not exist in the Excel file.
     * 
     * Usage:
     * Primarily used to dynamically retrieve data from external Excel files, such as data configurations or content sheets.
     */
    public async fetchDataFromExcel(sheetName: string): Promise<any[]> {
        // Fetch the Excel file as a blob from the configured source URL
        const response = await axios.get(appConfig.topTiulimFileSrc, {
            responseType: "blob",
        });

        // Read the response blob as an ArrayBuffer for processing by the XLSX library
        const arrayBuffer = await fileService.readFileAsArrayBuffer(response.data);

        // Parse the Excel file's ArrayBuffer to extract the workbook and locate the target sheet
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheet = workbook.Sheets[sheetName];

        // If the target sheet is not found, throw an error to inform the caller
        if (!sheet) {
            throw new Error(`Sheet with name ${sheetName} not found.`);
        }

        // Convert the sheet's content to JSON format and return as an array of objects
        return XLSX.utils.sheet_to_json(sheet);
    };

    /**
     * readFileAsArrayBuffer
     * ---------------------
     * Reads a Blob (binary file data) and returns its content as an ArrayBuffer, enabling further processing.
     * 
     * @param {Blob} blob - The binary file data, typically a file or a server response with "blob" type.
     * @returns {Promise<ArrayBuffer>} - A promise that resolves with the file data as an ArrayBuffer.
     * 
     * Usage:
     * This private helper function is used internally to prepare file data for XLSX processing.
     */
    private readFileAsArrayBuffer(blob: Blob): Promise<ArrayBuffer> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as ArrayBuffer); // Resolves with ArrayBuffer once file is loaded
            reader.onerror = reject; // Rejects the promise if there’s an error
            reader.readAsArrayBuffer(blob); // Initiates reading of the blob data as ArrayBuffer
        });
    };

};

// Exporting a singleton instance of FileService to be used across the application
export const fileService = new FileService();