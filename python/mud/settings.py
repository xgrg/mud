import os.path as osp
DEBUG = True
DIRNAME = '/'.join(osp.dirname(__file__).split('/')[:-2])
print DIRNAME
STATIC_PATH = osp.join(DIRNAME, 'web')
TEMPLATE_PATH = osp.join(DIRNAME, 'web')
#DATABASE = '/tmp/pluricent/pluricent.db'

import logging
import sys
#log linked to the standard error stream
logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)-8s - %(message)s',
                    datefmt='%d/%m/%Y %Hh%Mm%Ss')
console = logging.StreamHandler(sys.stderr)

#import base64
#import uuid
#base64.b64encode(uuid.uuid4().bytes + uuid.uuid4().bytes)
COOKIE_SECRET = 'L8LwECiNRxq2N0N2eGxx9MZlrpmuMEimlydNX/vt1LM='

