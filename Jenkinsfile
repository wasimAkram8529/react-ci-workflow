pipeline{
  agent any

  stages{
    stage('Install Dependencies') {
        steps {
            sh 'npm ci'
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