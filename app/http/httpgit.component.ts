import { Component } from '@angular/core';
import { GitUser } from './GitUser';
import { GitRepo } from './GitRepo';
import { HttpClient} from '@angular/common/http';
import  {map, finalize  } from "rxjs/operators"  


@Component(
    {
        selector: 'git-user',
        templateUrl: './httpgit.component.html'
    })
export class HttpGitComponent {
    public user: GitUser;
    public repos : GitRepo[];
    private url: string = "https://api.github.com/users/";
    public isLoading: boolean = false;
    public message: string = null;

    constructor(private http: HttpClient) {
    }

    clearall() 
    {
        this.user = null;
        this.message = null;
        this.repos = null 
        this.isLoading = true; 
    }
    
    getDetails(username: string): void {
        this.clearall()
        this.http.get<GitUser>(this.url + username)
            .pipe(finalize( () => this.isLoading = false))
            .subscribe(resp => this.user = resp,
                       error => this.message = "Sorry! User Not Found!");
    }

    getRepos(username: string): void {
        this.clearall()
        this.http.get<GitRepo[]>(this.url + username + "/repos")
            .pipe(finalize( () => this.isLoading = false))
            .subscribe(resp => this.repos = resp,
                       error => this.message = "Sorry! User Not Found!");
    }

     
}
