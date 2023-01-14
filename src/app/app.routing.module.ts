import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologiesComponent } from "./components/technologies/technologies.component";
import { ArticlesComponent } from "./views/articles/articles.component";
import { CommandsComponent } from "./views/commands/commands.component";
import { HomeComponent } from "./views/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: TechnologiesComponent },
  { path: 'articles/:technology', component: ArticlesComponent },
  { path: 'commands', component: TechnologiesComponent },
  { path: 'commands/:technology', component: CommandsComponent },

  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
