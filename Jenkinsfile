pipeline{
  agent any

  stages{
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