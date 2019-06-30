### Prerequisites:
- Have created a Kotlin Multiplatform library using `File-> New -> Project.. -> Kotlin-> Multiplatform Library` in IntellIJ (or a similiar IDE).
- Have hosted your project on a git or similiar repository. This guide will use github.com as an example.   
## Step 1: set up your bintray account (if you haven't already)
- Go to https://bintray.com/signup/oss and sign up.
- <b>Add a new repository </b>:
![add new repostiory](images/publish-kotlin-mpp-lib/add-new-repository.png)
- Under <b> name</b> put in the name of the repository. For example, `myrepository`. Under `Type` put `Maven`, and fill in the rest as you wish.

I will assume you have the 'new look', so press the `Go to New Look` button at the top of the screen if you have it.
- <b> Add a package: </b>
![add new package](images/publish-kotlin-mpp-lib/add-new-package.png)
- Under <b>Name </b> put in the name of the library. This should be a lower-case string. In this guide we will make publish a library that provides a function that prints "Kotlin is awesome!", so we will call it `kotlin-awesome-printer`. 
- Put in your desired licenses in <b>Licenses</b>.
- In <b>Version control</b> put in where your code is stored. In our example, it will be https://github.com/natanfudge/KotlinAwesomePrinter.

The other fields are not necessary right (MAKE SURE) now as we will insert them later on using a different method. 

- Click on <b>Save</b>

That is it for now on the Bintray side. 