import { createContext } from "react";

export const Authcontext = createContext();
const Authprovider = () => {

        const Onauth = {
            name : "siam",
        }
    return (
        <Authcontext.Provider value={Onauth}>
            
        </Authcontext.Provider>
    );
};

export default Authprovider;