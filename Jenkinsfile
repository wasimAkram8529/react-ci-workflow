pipeline{
  agent any

tools {
  nodejs 'Node_22'
}

  stages{
    stage("Update node"){
      steps{
        sh '''
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