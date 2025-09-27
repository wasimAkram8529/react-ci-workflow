pipeline{
  agent any

  stages{
    stage("Update node"){
      steps{
        sh '''
          nvm install 22
          nvm use 22

          # check version
          node -v
          npm -v
        '''
      }
    }
    stage('Install Dependencies') {
        steps {
            sh 'npm i'
        }
    }

    stage("Build"){
      steps{
        sh 'npm run build'
      }
    }

    stage("Artifact build"){
      steps{
        archiveArtifacts artifacts: 'dist/**'
      }
    }
  }
}