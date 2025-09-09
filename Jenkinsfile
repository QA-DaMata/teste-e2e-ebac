pipeline {
    agent any
    tools {
        nodejs "nodejs"
    }
    stages {
        stage('Setup') {
            steps {
                git branch: 'main', url: 'https://github.com/QA-DaMata/teste-e2e-ebac.git'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'NO_COLOR=1 npm test'
            }
        }
    }
}
