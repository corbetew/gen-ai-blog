FROM google/cloud-sdk:latest

RUN apt-get update && apt-get install -y curl
RUN echo -e '#!/bin/bash\n$@' > /usr/bin/sudo
RUN chmod +x /usr/bin/sudo
# Install Firebase CLI
RUN curl -sL firebase.tools | bash
