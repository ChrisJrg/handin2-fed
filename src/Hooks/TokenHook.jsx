import {jwtDecode} from "jwt-decode";

export function decodeToken(token) {

    if (!token) {return null}
    let decoded = jwtDecode(token);

    return {decoded,
            role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
            email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
            modelId: decoded["ModelId"],
    };
}

