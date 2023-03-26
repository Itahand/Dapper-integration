/** @format */

//@ts-ignore
import * as fcl from "@onflow/fcl";
import "./config";

// ///////////////
// // Cadence code
// ///////////////

// Lifecycle FCL Auth functions
export const unauthenticate = () => fcl.unauthenticate();
export const logIn = async () => await fcl.authenticate();
export const signUp = () => fcl.signUp();
export const currentUser = () => fcl.currentUser();
export const services = () => fcl.discovery.authn.snapshot();

// TopShot Scripts
import { getCollectionsIDs as getCollectionsIDsScript } from "./Scripts/getCollectionIds";
import { getMetadata as getMetadataScript } from "./Scripts/getMetadata";
import { getMetadataViews as getMetadataViewsScript } from "./Scripts/getMetadataViews";

// // ****** Script Functions ****** //

// Get a list of all the moments' ids an account owns.

export const getOwnedIDs = async (address: string) => {
  try {
    const response = await fcl.query({
      cadence: getCollectionsIDsScript(),
      args: (arg: any, t: any) => [arg(address, t.Address)],
    });

    console.log(response);
    return response;
  } catch (e: any) {
    console.log(e.message);
  }
};

// Get a list of all the moments' ids an account owns.

export const getMetadata = async (address: string, mommentId: string) => {
  try {
    const response = await fcl.query({
      cadence: getMetadataScript(),
      args: (arg: any, t: any) => [
        arg(address, t.Address),
        arg(mommentId, t.UInt64),
      ],
    });

    console.log(response);
    return response;
  } catch (e: any) {
    console.log(e.message);
  }
};

// Get a list of all the moments' ids an account owns.

export const getMetadataViews = async (address: string, mommentId: string) => {
  try {
    const response = await fcl.query({
      cadence: getMetadataViewsScript(),
      args: (arg: any, t: any) => [
        arg(address, t.Address),
        arg(mommentId, t.UInt64),
      ],
    });

    console.log(response);
    return response;
  } catch (e: any) {
    console.log(e.message);
  }
};
