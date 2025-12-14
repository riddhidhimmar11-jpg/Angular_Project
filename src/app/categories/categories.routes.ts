import { Route, Routes } from "@angular/router";
import { Categories } from "./categories";
import { ServerModule } from "@angular/platform-server";
import { FaceSerum } from "./face-serum/face-serum";
import { Facewash } from "./facewash/facewash";
import { Sheerom } from "./sheerom/sheerom";

export const categoriesRoutes: Routes = [
    {
        path:'',
                component : Categories,
                children:[
                    {
                        path:'face-serum',
                        component:FaceSerum
                    },
                    {
                        path:'facewash',
                        component:Facewash
                    },
                    {
                        path:'sheerom',
                        component:Sheerom
                    },
                    {
                        path:'',
                        redirectTo:'face-serum',
                        pathMatch:'full'
                    }
                ]
    }
]